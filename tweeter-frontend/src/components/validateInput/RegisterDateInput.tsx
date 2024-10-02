import { ValidatedDateSelector } from "./ValidatedDateSelector.tsx";
import {getDays, getMonths, getYears} from "../../features/register/utils/DateUtils.tsx";

export const RegisterDateInput: React.FC = () => {
  return (
    <div>
        <ValidatedDateSelector style={'nothing'}
                               valid={true}
                               name={"Month"}
                               dropDown={getMonths} />

        <ValidatedDateSelector style={'nothing'}
                               valid={true}
                               name={"Day"}
                               dropDown={getDays} />

        <ValidatedDateSelector style={'nothing'}
                               valid={true}
                               name={"Year"}
                               dropDown={getYears} />
    </div>
  );
} 