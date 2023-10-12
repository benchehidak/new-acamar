'use client';
// import ExamapleOne from "@/components/partials/table/ExampleOne"
import SalesTable from "@/components/partials/table/salesTable";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import axios from "axios";
export default function bookingPage(){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post('/api/protected/buyers', {});
          setData(response.data);
          setLoading(false);
          console.log(response.data);
        } catch (error) {
          setError(error);
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    if(loading) return <Loading/>
    if(error) return <div>{error.message}</div>
    return(
        <div>
            <SalesTable salesdata={data}/>
        </div>
    )

}