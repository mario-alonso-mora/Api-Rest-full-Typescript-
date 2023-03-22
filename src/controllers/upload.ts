import { Request, Response } from "express";
import { RequestExt } from '../interfaces/req-ext.interface';
import { registerUpload } from "../services/storage.services";
import { Storage } from "../interfaces/storage.interface";
import { handleHttp } from "../utils/error.handle";

const getFile = async (req: RequestExt, resp: Response) => {
  try {
    const { user, file } = req;
    const dataToRegister: Storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path: `${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    resp.send(response);
  } catch (e) {
    handleHttp(resp, "ERROR_GET_BLOG");
  }
};

export { getFile };