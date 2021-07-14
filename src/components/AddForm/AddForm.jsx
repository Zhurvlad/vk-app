import React, {Fragment, useEffect, useRef, useState} from 'react'
import Card from "../Card";
import Button from "../Button";
import closerSVG from "../../assets/close.svg";
import './AddForm.scss'


const AddForm = ({children}) => {

    const [showForm, setShowForm] = useState(false);
    const textareaRef = useRef(null)

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.focus()
        }
    }, [showForm])


    return (
        <Fragment>
            {showForm ?(<div className='add-form'>
                <div className="add-form__input">
                    <Card>
                        <textarea placeholder={"Введите название карточки"} ref={textareaRef} rows='3'/>
                    </Card>
                    <div className="add-form__bottom">
                        <Button>
                            Добавать карточку
                        </Button>
                        <img onClick={setShowForm.bind(this,false)} className="add-form__bottom-clear" src={closerSVG} alt='Удалить'/>
                    </div>
                </div>
            </div>) :
                (<div className="add-form__bottom">
                <div className="add-form__bottom-add-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1V15" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 8H15" stroke="grey" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span onClick={setShowForm.bind(this,true)}>Добавить ещё одну карточку</span>
                </div>
                </div>)}
        </Fragment>
    )

}

export default AddForm