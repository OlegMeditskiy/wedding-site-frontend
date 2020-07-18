import React, {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {getPersonalInvitations} from "../../util/GetAPI";
import {createPersonalInvitation} from "../../util/CreateAPI";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy} from "@fortawesome/free-solid-svg-icons";
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import {deletePersonalInvitation} from "../../util/DeleteAPI";
import {translation} from "../../constants";


const Invitations=(props)=>{

    const [invitations,setInvitations]=useState([])



    const getInvitations=()=>{
        let promise = getPersonalInvitations()
        promise
            .then(response => {
                setInvitations(response)
            }).catch(() => {
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
    function checkBoxFormatter(cell, row) {
        return <Form.Check readOnly checked={cell}/>
    }
    function statusFormatter(cell, row) {
        if (cell=="NOT_ANSWERED"){
            return translation.not_answered
        }
        else if(cell=="ACCEPTED"){
            return translation.accepted
        }
        else {
            return translation.declined
        }

    }

    function deleteFormatter(cell, row) {
        return (<div>
            <Form onSubmit={(event)=>deleteInvitation(cell,event)}>
                <Button variant={"link"} type="submit" >{translation.delete}</Button>
            </Form>
        </div>)
    }
    const columns = [
        {
            dataField: 'firstName',
            text: translation.table.firstName,

        },
        {
            dataField: 'lastName',
            text: translation.table.lastName,

        },
        {
            dataField: 'whoComingWithMe',
            text: translation.table.whoComingWithMe,

        },
        {
            dataField: 'status',
            text: translation.table.status,
            formatter: statusFormatter,
            editable:false
        },
        {
            dataField: 'needTransfer',
            text: translation.table.transfer,
            formatter: checkBoxFormatter,
            editable:false
        },
        {
            dataField: 'id',
            text: translation.table.delete,
            formatter:deleteFormatter,
            editable:false
        },

    ];
    const invitationsTable=()=>{
        return(
            <BootstrapTable
                keyField="id"
                data={invitations}
                columns={ columns }
                cellEdit={cellEditFactory({
                    mode: 'click'
                })}
            />
        )
    }

    return(
        <div className={"adminSiteBlock"}>
                <h1>{translation.invitations}</h1>
                {invitationsTable()}
        </div>
    )



}



export default Invitations;