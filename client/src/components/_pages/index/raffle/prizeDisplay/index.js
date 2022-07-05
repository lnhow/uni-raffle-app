import { Paper } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import AppContext from "../../../../_context";
import DisplayTopbar from "../../../../_common/displayTopbar";
import DisplayContainer from "./container";

export default function PrizeDisplay() {
  const { raffle } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [numData, setNumData] = useState(0);
  const [data, setData] = useState([]);

  const loadData = async contract => {
    setLoading(true);
    setNumData(0);
    setData([]);
    if (contract) {
      contract.methods
        .getPrizesLength()
        .call()
        .then(async num => {
          setNumData(num);
          const lines = [];
          for (let i = num - 1; i > -1; i--) {
            try {
              const line = await contract.methods.getPrize(i).call();
              const formatted = {
                id: line[0],
                image: line[1],
                description: line[2],
              };
              lines.push(formatted);
            } catch (error) {
              console.log(error);
            }
          }
          setData(lines);
        })
        .catch(error => {
          toast.error(error.message);
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    loadData(raffle);
  }, [raffle]);

  return (
    <Paper sx={{ padding: 2, height: 500 }}>
      <DisplayTopbar
        title={
          <>
            <b>All prizes</b> ({numData})
          </>
        }
        tooltip={"All prizes & it's winner"}
        handleRefresh={() => loadData(raffle)}
      />
      <DisplayContainer data={data} loading={loading} error={error} />
    </Paper>
  );
}
