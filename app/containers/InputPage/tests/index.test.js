import { mapDispatchToProps } from '../index';
import { insertString } from '../actions';

describe('mapDispatchToProps', () => {
  describe('onSubmitForm', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onSubmitForm).toBeDefined();
    });

    it('should dispatch insertString when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.onSubmitForm();
      expect(dispatch).toHaveBeenCalledWith(insertString());
    });

    it('should preventDefault if called with event', () => {
      const preventDefault = jest.fn();
      const result = mapDispatchToProps(() => {});
      const event = { preventDefault };
      result.onSubmitForm(event);
      expect(preventDefault).toHaveBeenCalledWith();
    });
  });
});