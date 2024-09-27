import { v4 } from "uuid";

import { getUUIDv4, isTaskFormValid } from "../utils/utils";

// Mock the function (i.e v4) that generates the UUID from the uuid library
jest.mock("uuid", () => ({
  v4: jest.fn(),
}));

let mockTitle: string;
let mockDescription: string;

let longTitle: string;
let longDescription: string;

let exactTitle: string;
let exactDescription: string;

describe("Utils -- getUUIDv4", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("it should generate a random UUID", () => {
    const mockUUID = "c790d704-3178-477f-b0de-16e8a42e2ee3";
    (v4 as jest.Mock).mockReturnValue(mockUUID);

    const returnedUUID = getUUIDv4();

    expect(v4).toHaveBeenCalled();
    expect(returnedUUID).toBe(mockUUID);
  });

  test("it should generate unique UUIDs when called multiple times", () => {
    const uuid1 = "c790d704-3178-477f-b0de-16e8a42e2ee3";
    const uuid2 = "c790d704-3178-477f-b0de-16e8a42e2ee4";

    (v4 as jest.Mock).mockReturnValueOnce(uuid1).mockReturnValueOnce(uuid2);

    const UUIDOne = getUUIDv4();
    const UUIDTwo = getUUIDv4();

    expect(v4).toHaveBeenCalledTimes(2);

    expect(UUIDOne).toBe(uuid1);
    expect(UUIDTwo).toBe(uuid2);

    expect(UUIDOne).not.toBe(UUIDTwo);
  });
});

describe("Utils -- isTaskFormValid", () => {
  beforeEach(() => {
    mockTitle = "Title 1";
    mockDescription = "Sample Description";

    longTitle = "t".repeat(31);
    longDescription = "d".repeat(501);

    exactTitle = "t".repeat(30);
    exactDescription = "d".repeat(500);
  });

  test("it returns true when both valid title and valid description are passed", () => {
    expect(isTaskFormValid(mockTitle, mockDescription)).toBe(true);
  });

  test("it returns true when only a valid title is passed", () => {
    expect(isTaskFormValid(mockTitle)).toBe(true);
  });

  test("it returns false when an empty title is passed", () => {
    expect(isTaskFormValid("")).toBe(false);
  });

  test("it returns false when an empty title after trimming is passed", () => {
    expect(isTaskFormValid("                ")).toBe(false);
  });

  test("it returns false when title is greater than 30 characters", () => {
    expect(isTaskFormValid(longTitle)).toBe(false);
  });

  test("it returns false when description is greater than 500 characters", () => {
    expect(isTaskFormValid(longDescription)).toBe(false);
  });

  test("it returns true when title is exactly 30 characters", () => {
    expect(isTaskFormValid(exactTitle)).toBe(true);
  });

  test("it returns false when title is greater than 30 characters but description is less than 500 characters", () => {
    expect(isTaskFormValid(longTitle, mockDescription)).toBe(false);
  });

  test("it returns false when title is less than 30 characters but description exceeds 500 characters", () => {
    expect(isTaskFormValid(mockTitle, longDescription)).toBe(false);
  });

  test("it returns true when title is less than 30 characters and description is exactly 500 characters", () => {
    expect(isTaskFormValid(mockTitle, exactDescription)).toBe(true);
  });

  test("it returns true when title is exactly 30 characters and description is exactly 500 characters", () => {
    expect(isTaskFormValid(exactTitle, exactDescription)).toBe(true);
  });
});
