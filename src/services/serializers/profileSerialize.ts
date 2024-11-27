import { accountTypesToView } from '../../constants';
import { IProfile } from '../../constants/types/profile.d';

export function profileToView(profile: IProfile) {
  return {
    ...profile,
    user_type: accountTypesToView[profile.user_type],
  };
}
