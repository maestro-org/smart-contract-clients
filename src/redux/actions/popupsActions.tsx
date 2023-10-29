import { Popups } from "../../types/popups";

export const UPDATE_POPUP = "UPDATE_POPUP";

interface UpdatePopupProps {
  popup: Popups;
  status: boolean;
  prefilled?: any;
}

export const updatePopup = ({ popup, status, prefilled }: UpdatePopupProps) => ({
  type: UPDATE_POPUP,
  payload: {
    popup,
    status,
    prefilled,
  },
});
