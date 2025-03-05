import { storedCWdata } from "../../../tests/mock/fakeData/cwData";
import UserStats from "../../types/codeWarsData";

export default async function getCW(): Promise<UserStats> {
    try {
        const url = 'https://www.codewars.com/api/v1/users/Willlasbury'
        const res = await fetch(url);

        if (res.ok) {
          const data = await res.json();
          return data
        } else {
          throw new Error(`${res.statusText} ${await res.text()}`);
        }
      } catch (err) {
        if (err instanceof Error) {
          // TODO
          console.log(err);
        }
        return storedCWdata
      }
    }