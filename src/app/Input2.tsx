import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import { Store } from './store';

interface Input2Props {
  store: Store;
}

const Input2 = observer(({ store }: Input2Props) => {
  const { value } = store;
  const onChange = useCallback(
    e => {
      store.change(e);
    },
    [store],
  );
  return (
    <div>
      Input2:
      <input value={value} onChange={onChange} />
    </div>
  );
});

export default Input2;
