/**
 * Defined some of the common types
 */
type StackNavigationProp = import('@react-navigation/stack').StackNavigationProp<allAnyTypes, allAnyTypes>;
type ReactNode = import('react').ReactNode;
type ReactChild = import('react').ReactChild;
type ReactChildren = import('react').ReactChildren;
type Component = import('react').Component;
type TFunction = () => void;
type TObject = Record<string, number, string, undefined, boolean, TFunction>;
type TObjectCorrect = Record<string, number | string | undefined | boolean | TFunction>;
type TArrayOfObjects = Array<string, TObject>;
type TFunctionOrObject = TFunction | TObject;
type allAnyTypes = string | number | string[] | null | undefined | TObject | TFunction;




interface Credentials {
    email: string;
    password: string;
}