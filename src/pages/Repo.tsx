import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Repository } from "./Repos";

export function Repo() {
  const params = useParams();
  const currentRepository = params["*"] as string;

  const queryClient = useQueryClient();

  async function handleChangeRepositoryDescription() {
    const previousRepos = queryClient.getQueryData<Repository[]>(['repo'])

    if (previousRepos) {
        const nextRepos = previousRepos.map(repo => {
            if (repo.full_name === currentRepository) {
                return { ...repo, description: 'Testando' }
            } else {
                return repo;
            }
        })

        queryClient.setQueryData(['repo'], nextRepos)
    }

  }

  return (
    <>
      <h1>{currentRepository}</h1>
      <button onClick={handleChangeRepositoryDescription}>
        Alterar descrição
      </button>
    </>
  );
}
