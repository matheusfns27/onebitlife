import React from "react";
import {View, ScroolView, Text, Image} from "react-native";

export default function Start() {

    return (
        <View>
            <ScrollView showVerticalScrollIndicator={false}>
                <View>
                    <Image
                        source={requestAnimationFrame("../..assets/icons/logo3.png")}
                    />
                    <Text>
                        Vamos transfromar sua vida {"/n"} em jogo, buscando sempre {"/n"} o melhor nível.
                    </Text>
                </View>

            </ScrollView>

        </View>

    )


}