import AccountService from '@server/services/account.service';
import { detectException } from '.';
import { ForbiddenError } from '@server/core/error.response';

// export const detechRoles = detectException(async (req, res, next) => {
//   req.scopes = await AccountService.getScopesById(req.accountId!);
//   return next();
// });

export const accessScopes = (scopes: string[]) => {
  return detectException(async (req, res, next) => {
    req.scopes = await AccountService.getScopesById(req.accountId!);
    const notAllowed = scopes.some((scope) => !req.scopes?.includes(scope));
    if (notAllowed) throw new ForbiddenError();
    return next();
  });
};
