import { http } from "msw";
import { HttpResponse } from "msw";
import { gitData } from "./fakeData";

export const handlers = [
  http.get("https://api.github.com/users/willlasbury/repos", () => {
    return HttpResponse.json(gitData);
  }),
];
