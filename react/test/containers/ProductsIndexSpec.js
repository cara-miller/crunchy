import ProductsIndexContainer from '../../src/containers/ProductsIndexContainer';
import ProductTile from '../../src/components/ProductTile'

describe('ProductsIndexContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ProductsIndexContainer/>);
  });

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ products: [] });
  });

  it('should render a Product Tile Component', () => {
    wrapper.setState({products: [{
      id: 1,
      name: 'skeleton',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Human-Skeleton.jpg/220px-Human-Skeleton.jpg'
    }]})
    expect(wrapper.find(ProductTile)).toBePresent();
  })

})
