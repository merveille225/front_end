import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function ListEmployes() {
    const [APIData, setAPIData] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    useEffect(() => {
        axios.get(`https://estiprojback.onrender.com/Employes`).then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { Id_employe, Nom_employe, Prenom_employe, Email_Employe } = data;
        localStorage.setItem('ID', Id_employe);
        localStorage.setItem('First Name', Prenom_employe);
        localStorage.setItem('Last Name', Nom_employe );
        localStorage.setItem('Email', Email_Employe)
    }

    const getData = (e) => {
        axios.get(`https://estiprojback.onrender.com/Employes?q=${e}`).then((getData) => {
                setAPIData(getData.data);
            });
    };

    const onDelete = (Id_employe) => {
        axios.delete(`https://estiprojback.onrender.com/Employes/${Id_employe}`).then(() => {
            getData();
        })
    }

    const like = (data) => {
        data.like += 1;
        axios.put(`https://estiprojback.onrender.com/Employes/${data.Id_employe}`, data)
    }
    
    const dislike = (data) => {
            data.dislike += 1;
            axios.put(`https://estiprojback.onrender.com/Employes/${data.Id_employe}`, data)
    }
        
    const jadore = (data) => {
            data.jadore += 1;
            axios.put(`https://estiprojback.onrender.com/Employes/${data.Id_employe}`, data)
    }
    

    return (
    
        <div>
            <input
            type="text"
            placeholder="Search"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <button type="sublimt" onSelect={getData(searchTxt)}>
          <i class="fa-solid fa-magnifying-glass"></i>
          </button>

            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Prenom</Table.HeaderCell>
                        <Table.HeaderCell>Nom</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Administrateur</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                        <Table.HeaderCell>Like  /  Dislike  /  jadore</Table.HeaderCell>
                        

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.Prenom_employe}</Table.Cell>
                                <Table.Cell>{data.Nom_employe}</Table.Cell>
                                <Table.Cell>{data.Email_employe}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/modifEmployes'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}><i class="fa-solid fa-pen"></i></Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.Id_employe)}><i class="fa-solid fa-trash"></i></Button>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => like(data)}> <i class="fa-solid fa-thumbs-up"></i> {data.like}</Button>
                                    <Button onClick={() => dislike(data)}> <i class="fa-solid fa-thumbs-down"></i> {data.dislike}</Button>
                                    <Button onClick={() => jadore(data)}> <i class="fa-solid fa-heart"></i> {data.jadore}</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}
