import React from 'react';
import { Store } from './store';
import { useLocalStore, observer } from 'mobx-react';
import Input2 from './Input2';

const Input2Wrap = observer(() => {
  const store = useLocalStore(() => new Store());

  return (
    <div>
      <Input2 store={store} />
    </div>
  );
});

export default Input2Wrap;
