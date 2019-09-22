import React, { Component } from 'react'

//const Contacts = ({ contacts }) => {
//	return (
//		<div>
//			<center><h1>Contact List</h1></center>
//			{contacts.map((contact) => (
//				<div className="card">
//					<div className="card-body">
//						<h5 className="card-title">{contact.name}</h5>
//						<h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
//						<p className="card-text">{contact.company.catchPhrase}</p>
//					</div>
//				</div>
//			))}
//		</div>
//	);
//};
class ContactList extends Component {
	state = {
		contactsData: []
	}

	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then((data) => {
				this.setState({ contactsData: data })
			})
			.catch(console.log)
	}

	render() {
		return (
			<div>
				<center><h1>Contact List</h1></center>
				{this.state.contactsData.map((contact) => (
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">{contact.name}</h5>
							<h6 className="card-subtitle mb-2 text-muted">{contact.email}</h6>
							<p className="card-text">{contact.company.catchPhrase}</p>
						</div>
					</div>
				))}
			</div>
		);
	}
}
export default ContactList
//export default Contacts