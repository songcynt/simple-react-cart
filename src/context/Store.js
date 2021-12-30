import TeaStore from './TeaStore'
import CartStore from './CartStore'

/**
 * Higher Order Component composer
 * @param  {...any} args (hoc1, hoc2, hoc3) => hoc1(hoc2(hoc3))
 * @returns 
 */
const composer = (...args) => {
    return args.reverse().reduce((previous, current) => {
        return current(previous);
    })
}

const stores = [TeaStore, CartStore]

const GlobalStore = ({children}) => {
    return composer(...stores, children);
};

export default GlobalStore