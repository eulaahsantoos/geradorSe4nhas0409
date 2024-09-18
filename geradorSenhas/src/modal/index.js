import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
export function ModalPassword() {
    return (
        <View style={styles.container}>

            <View style={styles.content}>

                <Text style={styles.title}> Senha gerada </Text>

                <Pressable style={styles.innerPassword}>

                    <Text style={styles.text}> 123456 </Text>

                </Pressable >
                <View style={styles.buttonArea}>

                    <TouchableOpacity style={styles.button}>

                        <Text style={styles.buttonText} >Voltar </Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>

                        <Text style={styles.buttonSaveText}> Salvar senha </Text>

                    </TouchableOpacity>

                </View>

            </View>

        </View>

    )
}

