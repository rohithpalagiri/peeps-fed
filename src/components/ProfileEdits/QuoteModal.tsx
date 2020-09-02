import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import userService from '../../services/users'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const QuoteModal = ({ showModal, handleModalClose, id}) => {

    const users = useSelector(state => state.users)

    const user = users.find(x => x.id === id)

    const [quoteInput, setQuoteInput] = useState('')
    const [authorInput, setAuthorInput] = useState('')

    const handleQuoteChange = (e) => {
        e.preventDefault();
        setQuoteInput(e.target.value)
    }

    const handleAuthorChange = (e) => {
        e.preventDefault();
        setAuthorInput(e.target.value)
    }

    const handleQuoteSubmit = (e) => {
        e.preventDefault();
        const changedUser = {...user, quote: quoteInput, quoteAuthor: authorInput}
        userService.update(id, changedUser)
    }

    return (
        <Modal
            size="lg"
            show={showModal}
            onHide={handleModalClose}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Edit Quote
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleQuoteSubmit}>
                    <h4>Edit Quote</h4>
                    <input type="text" name="userSearch" value={quoteInput} onChange={handleQuoteChange} />

                    <h4>Edit Author</h4>
                    <input type="text" name="userSearch" value={authorInput} onChange={handleAuthorChange} />

                    <Button onClick={handleQuoteSubmit}>Large modal</Button>
                </form>
            </Modal.Body>
        </Modal>

    )
}
export default QuoteModal