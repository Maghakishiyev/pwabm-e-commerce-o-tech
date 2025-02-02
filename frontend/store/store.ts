import { proxy } from 'valtio';

export const store = proxy({
    user: {
        isSignedIn: false,
        name: '',
    },
    cart: {
        items: [] as { id: string; name: string; price: number; quantity: number; image: string }[],
        get totalItems() {
            return store.cart.items.reduce((sum, item) => sum + item.quantity, 0);
        },
        get totalPrice() {
            return store.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
    },
});

// Add methods to interact with the state
export const actions = {
    signIn(name: string) {
        store.user.isSignedIn = true;
        store.user.name = name;
    },
    signOut() {
        store.user.isSignedIn = false;
        store.user.name = '';
    },
    addToCart(item: { id: string; name: string; price: number; image: string }) {
        const existingItem = store.cart.items.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            store.cart.items.push({ ...item, quantity: 1 });
        }
    },
    removeFromCart(itemId: string) {
        store.cart.items = store.cart.items.filter((item) => item.id !== itemId);
    },
    updateQuantity(itemId: string, quantity: number) {
        const item = store.cart.items.find((cartItem) => cartItem.id === itemId);
        if (item) {
            item.quantity = quantity;
        }
    },
};
