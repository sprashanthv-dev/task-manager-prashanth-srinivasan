import { StorageModel } from "../models/StorageModel";
import { get, save, remove, removeAll } from "../utils/storage";

const TEST_KEY = "TEST_KEY";
const TEST_OPERATION = "View";

let mockTask: StorageModel;

// Mock local storage to test the methods of the storage service
beforeAll(() => {
  Object.defineProperty(global, "localStorage", {
    value: {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    },
    writable: true,
  });
});

beforeEach(() => {
  mockTask = {
    operation: TEST_OPERATION,
    content: { id: 1, title: "Title 1", completed: false },
  };

  localStorage.setItem = jest.fn();
  localStorage.getItem = jest.fn();
  localStorage.removeItem = jest.fn();
  localStorage.clear = jest.fn();
});

describe("Utils - Storage", () => {
  test("setItem stores the value in localStorage", () => {
    save(TEST_KEY, mockTask);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      TEST_KEY,
      JSON.stringify(mockTask),
    );
  });

  test("getItem retrieves the value of a key if present", () => {
    (localStorage.getItem as jest.Mock).mockReturnValue(
      JSON.stringify(mockTask),
    );

    const item = get(TEST_KEY);

    expect(localStorage.getItem).toHaveBeenCalledWith(TEST_KEY);
    expect(item).toEqual(mockTask);
  });

  test("getItem returns null if a key is not present", () => {
    (localStorage.getItem as jest.Mock).mockReturnValue(null);

    const item = get("KEY_DOES_NOT_EXIST");

    expect(localStorage.getItem).toHaveBeenCalledWith("KEY_DOES_NOT_EXIST");
    expect(item).toBeNull();
  });

  test("removeItem removes the entry from localStorage if present", () => {
    remove(TEST_KEY);
    expect(localStorage.removeItem).toHaveBeenCalledWith(TEST_KEY);
  });

  test("clear clears all entries in the localStorage", () => {
    removeAll();
    expect(localStorage.clear).toHaveBeenCalledTimes(1);
  });
});
