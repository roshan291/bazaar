import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';  
import Form from 'react-bootstrap/Form';
import { changeLeadStatus } from '../constants';

const UpdateLeadStatus = (props: any) => { 
  return (
    <Modal show={props?.show} onHide={props?.onHide}>
        { props?.selectedItem === "Change Lead Status" ? <><Modal.Header closeButton>
          <Modal.Title><h5>Change Lead Status</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Select aria-label="Default select example">
                {
                    changeLeadStatus?.map((list: any) => <option key = {list} value={list}>{list}</option>)
                }
            </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props?.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={props?.onHide}>
            Submit
          </Button>
        </Modal.Footer> </>: <></>}

        { props?.selectedItem === "Remove Lead" ? <><Modal.Header closeButton>
          <Modal.Title><h5>Are you sure want to delete lead ?</h5></Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={props?.onHide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={props?.onHide}>
            Delete
          </Button>
        </Modal.Footer> </>: <></>}
    </Modal>
  )
}

export default UpdateLeadStatus