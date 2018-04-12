export default function createAction(type, payload, error = false) {
  const action = {
    type,
    payload
  };

  if (error) action.error = true;

  return action;
}
