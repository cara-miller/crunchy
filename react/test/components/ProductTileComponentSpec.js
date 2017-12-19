import ProductTile from '../../src/components/ProductTile';

describe('ProductTile', () =>{
  let wrapper,
      imageUrl;

  beforeEach(()=>{
    wrapper = mount(
      <ProductTile
        name="elephant"
        image='http://fakeurl.com/elephant'
      />
    );
  });

  it('should render an h1 tag with the text property value', () => {
    expect(wrapper.find('h5').text()).toBe('elephant');
  });

  it('should render an img tag with the specific props', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: 'http://fakeurl.com/elephant',
      width:'100',
      height:'100'
    });
  });

});
