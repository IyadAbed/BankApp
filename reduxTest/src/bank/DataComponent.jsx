import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFakestoreData } from "./fakestoreSlice";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const DataComponent = ({ data, loading, error, fetchFakestoreData }) => {
  useEffect(() => {
    fetchFakestoreData();
  }, [fetchFakestoreData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
        <div className=" flex flex-wrap gap-11">
      {data.map((data) => {
        return (
          <>
              <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img src={data.image} alt="img-blur-shadow" layout="fill" />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {data.title}
                  </Typography>
                  <Typography>{data.description}</Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button>Read More</Button>
                </CardFooter>
              </Card>
          </>
        );
      })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.fakeApi.data,
  loading: state.fakeApi.loading,
  error: state.fakeApi.error,
});

const mapDispatchToProps = {
  fetchFakestoreData,
};

export default connect(mapStateToProps, mapDispatchToProps)(DataComponent);
