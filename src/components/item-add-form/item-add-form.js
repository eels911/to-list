import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label : '' 
    };
    // для получения текущего значения интпута и каждый раз когда значение меняется
    // вызываем эту функцию onLabelChange и используя объект е(ивэнт) мы достаем из него тек. знач. поля
    onLabelChange = (e) => {
        // обновление стэйта
        this.setState({
            // с console.log выводится текущее значение
            label: e.target.value.toUpperCase()
        });
    }
       // обработка результатов
    //    чтобы отловить отправку формы
    onSubmit = (e) => {
        // когда ивэет будет обрабптывается действие по дефллту отправлять не нунжо.
        // дефолт для формы - отправка на сервер с перезагрузкой страницы
        e.preventDefault();
        // передаем значение из поля ввода
        this.props.onItemAdded(this.state.label);
        // делаемпустой label строкой  
        this.setState({
            label: ''
        });
    }; 

    render() {
        return (
            <form className="item-add-form d-flex"
         
                onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                placeholder="What needs to be done! "
                // делаем элемент controlled
                value = {this.state.label}/>
                <button className="btn btn-outline-secondary"
                onClick={() => this.props.onItemAdded('Hello')}>
                    Add item
                    </button>
            </form>
        )
    }
}
