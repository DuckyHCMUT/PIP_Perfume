import { Delete, Edit } from "@material-ui/icons";
import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import swal from "sweetalert";

const Container = styled.div`
    font-size: 15px;
    height: 500px;
    overflow: scroll;
`;
const ItemCard = styled.div`
    height: 100px;
    border: 0.5px solid rgba(0, 0, 0, 0.3);
    padding: 5px;
    border-radius: 5px;
    margin-top: 5px;
    display: flex;
`;
const ImageFrame = styled.img`
    flex: 1;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
`;
const StatWrapper = styled.div`
    flex: 4;
    margin: auto;
    text-align: center;
`;
const Stat = styled.div`
    font-size: 16px;
`;
const ButtonGroup = styled.div`
    flex: 1;
    margin: auto;
    display: flex;
    font-size: 12px;
    text-align: center;
`;

const AdminFoundItems = ({ value, pickItem }) => {
    const [filter, setFilter] = useState([]);
    const [data, setData] = useState([]);
    const [state, setState] = useState();
    // var itemDetail;
    try {
        useEffect(() => {
            axios
                .get("/api/items")
                .then((response) => {
                    setData(response.data);
                    setFilter(
                        data.filter((item) =>
                            item.Name.toLowerCase().includes(value)
                        )
                    );
                })
                .catch((error) => console.log(error));
        }, [value, state, data]);
    } catch (err) {
        console.log(err);
    }
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to undo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                axios
                    .delete(`/api/items/${id}`)
                    .then(swal("Item has been deleted.", { icon: "success" }))
                    .then(setState(""));
            }
        });
    };
    const itemList = filter
        ? filter.map((item) => (
              <ItemCard key={item._id}>
                  <ImageFrame src={item.Image} />
                  <StatWrapper>
                      <Stat>{item.Brand}</Stat>
                      <Stat>{item.Name}</Stat>
                  </StatWrapper>
                  <ButtonGroup>
                      <Button onClick={() => pickItem(item)}>
                          <Edit />
                      </Button>
                      <Button onClick={() => handleDelete(item._id)}>
                          <Delete />
                      </Button>
                  </ButtonGroup>
              </ItemCard>
          ))
        : "Product is loading";

    return <Container>{itemList}</Container>;
};

export default AdminFoundItems;
