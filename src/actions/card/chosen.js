import { constants } from '../../shared';

export default data => ({
  type: constants.actions.me,
  me: {
    id: data.user.id,
    card: data.card,
  },
})
