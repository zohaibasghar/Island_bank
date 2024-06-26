import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Accounts from "./Stacks/Accounts";
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import Transfer from "./Screens/Transfer/index";
import Auth from "./Stacks/Auth";
import { useAppSelector } from "./redux/Store";
import Transfers from "./Stacks/Transfers";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home";
import Credit from "./Stacks/Credit";
import CreditHome from "./Screens/Credit/CreditHome";
import SupportHome from "./Screens/Support/SupportHome";
import Pay from "./Stacks/Pay";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#5E41E6",
        tabBarLabelPosition: "below-icon",
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case "HomeAcc":
              return <Feather name="credit-card" size={24} color={color} />;
            case "Transfer":
              return <Feather name="repeat" size={20} color={color} />;
            case "Pay":
              return (
                <AntDesign
                  name="wifi"
                  size={20}
                  color={color}
                  style={{ transform: [{ rotate: "90deg" }] }}
                />
              );
            case "CreditHome":
              return <AntDesign name="inbox" size={22} color={color} />;

            case "SupportHome":
              return <MaterialIcons name="chat-bubble-outline" size={22} color={color} />;
          }
        },
        tabBarLabelStyle: { fontSize: 11 },
      })}
    >
      <Tab.Screen name="HomeAcc" component={Home} options={{ tabBarLabel: "Accounts" }} />
      <Tab.Screen name="Transfer" component={Transfer} />
      <Tab.Screen
        name="Pay"
        component={Pay}
        options={{ tabBarLabel: "Pay", tabBarStyle: { display: "none" } }}
      />
      <Tab.Screen name="CreditHome" component={CreditHome} options={{ tabBarLabel: "Credit" }} />
      <Tab.Screen
        name="SupportHome"
        component={SupportHome}
        options={{ tabBarLabel: "Support", tabBarStyle: { display: "none" } }}
      />
    </Tab.Navigator>
  );
};
export default function Main() {
  const { token } = useAppSelector((state) => state.auth);
  if (!token) {
    return <Auth />;
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="Accounts" component={Accounts} />
      <Stack.Screen name="Transfers" component={Transfers} />
      <Stack.Screen name="Credit" component={Credit} />
    </Stack.Navigator>
  );
}
