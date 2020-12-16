import { isLinkHttp } from "@vuepress/shared";

export const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo)) return "GitHub";
  if (/bitbucket\.org/.test(repo)) return "Bitbucket";
  if (/gitlab\.com/.test(repo)) return "GitLab";
  return null;
};
