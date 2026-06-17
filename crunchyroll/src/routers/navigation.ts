export type ParametrosRotasStack = {
  StackLogin: undefined;
  StackHome: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParametrosRotasStack {}
  }
}