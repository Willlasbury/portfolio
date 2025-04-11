import {query, variables} from './userquery'
import { StoredLeetData } from '../../types/leetCodeData';
import { storedLeetData } from '../../../tests/mock/fakeData/leetData';

export default function getLeetData():Promise<StoredLeetData> {
    return fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables })
    }).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        } else {
          return response.json()
        }
        // return storedLeetData;
      })
    }
