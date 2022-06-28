import React from 'react'

export default class BookingForm extends React.Component {
    state = {
        'firstname': '',
        'lastname': '',
        'seating': '',
        'smoking': '',
        'appetizer': [],
        'loaded': false

    }

    seating = [

        {
            "display": "Outdoor",
            "value": "outdoor"
        },
        {
            "display": "Indoors",
            "value": "indoors"
        },
        {
            "display": "VIP Indoors",
            "value": "vipindoors"
        }

    ]

    smoking = [
        {
            "display": "Smoking",
            "value": "smoking"
        },

        {
            "display": "Non-smoking",
            "value": "nonsmoking"
        }

    ]

    appetizer = [
        {
            "display": "Raw Fishes",
            "value": "rawfishes"
        },

        {
            "display": "Salad",
            "value": "salad"
        },

        {
            "display": "Fried Cuttlefish",
            "value": "friedcuttlefish"
        },

        {
            "display": "Peanuts",
            "value": "peanuts"
        }

    ]

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    renderSeating() {
        let radioButton = [];
        for (let eachSeating of this.seating) {
            let rb = <React.Fragment>
                <input type="radio"
                    name="seating"
                    value={eachSeating.value}
                    onChange={this.updateFormField}
                    checked={this.state.seating === eachSeating.value} />
                <span>{eachSeating.display}</span>
            </React.Fragment>
            radioButton.push(rb)
        }
        return radioButton
    }

    renderSmoking() {
        let smokeOptions = this.smoking.map((eachSmoking) => {
            return <option key={eachSmoking.value} value={eachSmoking.value}>{eachSmoking.display}</option>
        })
        return smokeOptions
    }


    updateAppetizer = (e) => {
        if (this.state.appetizer.includes(e.target.value)) {

            // case 1: the value is already in the array
            let indexToRemove = this.state.appetizer.findIndex((eachAppetizer) => {
                return eachAppetizer === e.target.value
            })

            let cloned = [
                ...this.state.appetizer.slice(0, indexToRemove), // slice up but excluding the index that we want to remove
                ...this.state.appetizer.slice(indexToRemove + 1) // slice starting one after the index to remove
            ];
            this.setState({
                'appetizer': cloned
            })
        } else {
            // case 2: the value is not in the array
            let cloned = [...this.state.appetizer, e.target.value];
            this.setState({
                'appetizer': cloned
            })
        }



    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>FirstName:</label>
                    <input type="text" value={this.state.firstname} name="firstname" onChange={this.updateFormField} />
                </div>
                <div>
                    <label>LastName:</label>
                    <input type="text" value={this.state.lastname} name="lastname" onChange={this.updateFormField} />
                </div>
                <div>
                    <label>Seating:</label>
                    {this.renderSeating()}
                </div>
                <div>
                    <label>Smoking:</label>
                    <select name="smoking" value={this.state.smoking} onChange={this.updateFormField}>
                    {this.renderSmoking()}
                    </select>
                </div>
                <div>
                <label>Select your Appetizer:</label>
                {this.appetizer.map((eachAppetizer) => {
                    return <React.Fragment key={eachAppetizer.value}>
                        <input type="checkbox"
                            name="appetizer"
                            value={eachAppetizer.value}
                            onChange={this.updateAppetizer}
                            checked={this.state.appetizer.includes(eachAppetizer.value)}
                        />
                        <span>{eachAppetizer.display}</span>
                    </React.Fragment>
                })}
            </div>
            </React.Fragment>
        )
    }

}