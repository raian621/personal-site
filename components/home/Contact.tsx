import styles from '../../styles/home/Contact.module.css';

export const Contact = () => {
	return (
		<section id='contact' className={styles.contact}>
			<div className={styles.contactMeForm}>
				<h2>Contact Me</h2>
				<form method='post'>
					<fieldset className={styles.nameFields}>
						<div className={styles.nameField}>
							<label htmlFor='first-name'>First Name</label>
							<input name='first-name' type='text'/>
						</div>
						<div className={styles.nameField}>
							<label htmlFor='last-name'>Last Name</label>
							<input name='last-name' type='text'/>
						</div>
					</fieldset>
					<fieldset>
						<label htmlFor='email'>Email Address</label>
						<input name='email' type='text'/>
					</fieldset>
					<fieldset className={styles.contactMeMessage}>
						<label htmlFor='description'>Message</label>
						<textarea name='description'/>
					</fieldset>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</section>
	)
}