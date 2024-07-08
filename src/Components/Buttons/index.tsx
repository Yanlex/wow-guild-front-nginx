import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

type dialogProps = {
	buttonText: string;
	formTitle: string;
	childComponent: JSX.Element;
	addStyle: string;
};

function DialogButton(props: dialogProps) {
	const [isOpen, setIsOpen] = useState(false);
	const { buttonText, formTitle, childComponent, addStyle } = props;
	const handleOpen: () => void = () => {
		setIsOpen(true);
	};
	const handleClose: () => void = () => {
		setIsOpen(false);
	};
	return (
		<>
			<div className="">
				<button type="button" onClick={handleOpen} className={addStyle}>
					{buttonText}
				</button>
			</div>
			<Dialog open={isOpen} onClose={handleClose} className="">
				{/* Full-screen container to center the panel */}
				<div className="dialogMain">
					{/* The actual dialog panel  */}
					<Dialog.Panel className="dialogMain-content">
						<Dialog.Title style={{ padding: '0 0 10px 0' }}>{formTitle}</Dialog.Title>
						{React.cloneElement(childComponent, { handleClose })}
						<button type="button" onClick={() => setIsOpen(false)} className="button">
							Закрыть
						</button>
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	);
}

export default DialogButton;
