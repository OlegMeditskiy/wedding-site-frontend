import React, {useEffect, useState} from "react";
import {Button, Form, Tab, Tabs} from "react-bootstrap";
import {getPersonalInvitations} from "../../util/GetAPI";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import {deletePersonalInvitation} from "../../util/DeleteAPI";
import {translation} from "../../constants";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';


const Invitations=(props)=>{
    const [coming,setComing]=useState([])
    const [notComing,setNotComing]=useState([])
    const getInvitations=()=>{

        setComing([])
        setNotComing([])
        let promise = getPersonalInvitations()
        promise
            .then(response => {
                response.forEach((invitation)=>{
                    console.log(invitation)

                    if (invitation.coming){

                        setComing(oldArray=>[...oldArray, invitation]);
                    }
                    else {

                        setNotComing(oldArray=>[...oldArray,invitation]);
                    }
                    })
            })
    .catch(() => {

        });
    }
    const updateInvitations=()=>{
        let promise = getPersonalInvitations()
        promise
            .then(response => {
                setComing(response)
            })
            .catch(() => {

            });
    }

    useEffect(() => {
       getInvitations();

    },[]);

    const deleteInvitation=(id,event)=> {
        event.preventDefault();
        const deleteRequest={
            id:id
        }
        deletePersonalInvitation(deleteRequest)
            .then((response) => {
                props.successNotification(response.message)
                getInvitations();
            })
            .catch((error) => {
            });
    }
    function statusFormatter(cell, row) {
       if(cell===true){
            return translation.accepted
        }
        else {
            return translation.declined
        }
    }
    function transferFormatter(cell, row) {
        if(cell===true){
            return translation.needTransfer
        }
        else {
            return translation.dontNeedTransfer
        }
    }

    function deleteFormatter(cell, row) {
        return (<div>
            <Form onSubmit={(event)=>deleteInvitation(cell,event)}>
                <Button variant={"link"} type="submit" >{translation.delete}</Button>
            </Form>
        </div>)
    }
    const columnsComing = [
        {
            dataField: 'firstName',
            text: translation.table.firstName,
            editable:false,
            sort: true
        },
        {
            dataField: 'lastName',
            text: translation.table.lastName,
            editable:false,
            sort: true
        },
        {
            dataField: 'whoComingWithMe',
            text: translation.table.whoComingWithMe,
            editable:false
        },
        {
            dataField: 'coming',
            text: translation.table.status,
            formatter: statusFormatter,
            editable:false
        },
        {
            dataField: 'needTransfer',
            text: translation.table.transfer,
            formatter: transferFormatter,
            editable:false,
            sort: true
        },
        {
            dataField: 'id',
            text: translation.table.delete,
            formatter:deleteFormatter,
            editable:false
        },

    ];
    const columnsNotComing = [
        {
            dataField: 'firstName',
            text: translation.table.firstName,
            editable:false,
            sort: true
        },
        {
            dataField: 'lastName',
            text: translation.table.lastName,
            editable:false,
            sort: true
        },
        {
            dataField: 'coming',
            text: translation.table.status,
            formatter: statusFormatter,
            editable:false
        },
        {
            dataField: 'id',
            text: translation.table.delete,
            formatter:deleteFormatter,
            editable:false
        }

    ];
    const comingTable=()=>{
        return(
            <BootstrapTable
                pagination={ paginationFactory({
                    paginationSize: 10,
                    showTotal:true,
                    hideSizePerPage:true
                }) }
                striped
                hover
                condensed
                keyField="id"
                data={coming}
                columns={columnsComing}
                cellEdit={cellEditFactory({
                    mode: 'click'
                })}
            />
        )
    }
    const notComingTable=()=>{
        return(
            <BootstrapTable
                pagination={ paginationFactory({
                    paginationSize: 10,
                    showTotal:true,
                    hideSizePerPage:true
                }) }
                striped
                hover
                condensed
                keyField="id"
                data={notComing}
                columns={columnsNotComing}
                cellEdit={cellEditFactory({
                    mode: 'click'
                })}
            />
        )
    }

    return(
        <div className={"adminSiteBlock"}>
                <h1>{translation.invitations}</h1>
            <Tabs defaultActiveKey='coming' id="uncontrolled-tab-example">
                <Tab eventKey="coming" title={"Приду"}>
                    {comingTable()}
                </Tab>
                <Tab eventKey="notComing" title={"Не приду"}>
                    {notComingTable()}
                </Tab>
            </Tabs>


        </div>
    )



}



export default Invitations;