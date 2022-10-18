export type Listener<T extends unknown[] = any[]> = (...args: T) => void;

class EventBus<E extends string = string, M extends { [K in E]: unknown[] } = Record<E, any[]>>{
	listeners: Record<string, Listener[]> = {};

	constructor() {
		this.listeners = {};
	}

	on(event: E, callback: Listener<M[E]>) {
		if (!this.listeners[event]) {
			this.listeners[event] = [];
		}

		this.listeners[event].push(callback);
	}

	off(event: E, callback: Listener) {
		if (!this.listeners[event]) {
			throw new Error(`Нет события: ${event}`);
		}

		this.listeners[event] = this.listeners[event]
			.filter(listener => listener !== callback);
	}

	emit(event: E, ...args: M[E]) {
		if (!this.listeners[event]) {
			throw new Error(`Нет события: ${event}`);
		}

		this.listeners[event].forEach(listener => {
			listener(...args);
		});
	}
}

export default EventBus;