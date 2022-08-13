import { message } from "antd";

export const SuccessMessage = (msg) => {
	message.success(msg);
};

export const ErrorMessage = (msg) => {
	message.error(msg);
};

export const WarningMessage = (msg) => {
	message.warning(msg);
};
