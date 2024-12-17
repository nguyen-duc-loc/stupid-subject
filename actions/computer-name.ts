"use server";

import { execSync } from "child_process";
import { hostname } from "os";

export const getComputerName = async () => {
  switch (process.platform) {
    case "win32":
      return process.env.COMPUTERNAME;
    case "darwin":
      return execSync("scutil --get ComputerName").toString().trim();
    default:
      return hostname();
  }
};
