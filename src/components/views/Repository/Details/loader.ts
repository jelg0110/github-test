import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getRepository } from "../../../../services/RepositoryService";

export default function RepositoryDetailsLoader({ params }: LoaderFunctionArgs) {
  if (params.owner && params.repo) {
    return getRepository(params.owner, params.repo);
  } else {
    throw redirect("/");
  }
}