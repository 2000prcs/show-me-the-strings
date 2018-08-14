import React from 'react';
import { mount } from 'enzyme';

import { HomePage, mapDispatchToProps } from '../index';
import { getStrings } from '../../App/actions';

const data = [
  {
    id: 1,
    string: 'String 1',
    createdat: '2018-08-09',
  },
  {
    id: 2,
    string: 'String 2',
    createdat: '2018-08-09',
  },
  {
    id: 3,
    string: 'String 3',
    createdat: '2018-08-09',
  },
];

describe('<HomePage />', () => {
  it('should fetch strings from DB', () => {
    const mockString = jest.fn();
    const HomepageWrapper = mount(
      <HomePage loading error={false} strings={data} getStrings={mockString} />,
    );
    expect(mockString).toHaveBeenCalled();
    HomepageWrapper.unmount();
  });
});

describe('mapDispatchToProps', () => {
  describe('getStrings', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.getStrings).toBeDefined();
    });

    it('should dispatch getStrings when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.getStrings();
      expect(dispatch).toHaveBeenLastCalledWith(getStrings());
    });
  });
});