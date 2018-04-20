import ProductTile from '../../src/+pages/+product-catalog-page/ProductTile';

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
});
