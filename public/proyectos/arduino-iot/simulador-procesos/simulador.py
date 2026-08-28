import tkinter as tk
import random
from threading import Semaphore

# Configuración de la memoria
MEMORY_SIZE = 150
SECONDARY_MEMORY_SIZE = 150

class Proceso:
    def __init__(self, pid, memoria_requerida, recursos_requeridos):
        self.pid = pid
        self.memoria_requerida = memoria_requerida
        self.recursos_requeridos = recursos_requeridos
        self.estado = "Nuevo"
        self.start_index = None
        self.esta_en_memoria_secundaria = False
        self.recursos_asignados = False  # Recursos asignados inicialmente

class Memoria:
    def __init__(self, tamano_total):
        self.tamano_total = tamano_total
        self.tamano_disponible = tamano_total
        self.memoria = [0] * tamano_total

    def asignar_memoria(self, proceso, algoritmo):
        if algoritmo == "First Fit":
            return self.asignar_memoria_first_fit(proceso)
        elif algoritmo == "Best Fit":
            return self.asignar_memoria_best_fit(proceso)
        elif algoritmo == "Worst Fit":
            return self.asignar_memoria_worst_fit(proceso)

    def asignar_memoria_first_fit(self, proceso):
        start_index = -1
        free_space = 0
        for i in range(self.tamano_total):
            if self.memoria[i] == 0:  # Espacio libre
                if start_index == -1:
                    start_index = i
                free_space += 1
                if free_space >= proceso.memoria_requerida:  # Verifica si hay suficiente espacio
                    for j in range(start_index, start_index + proceso.memoria_requerida):
                        self.memoria[j] = proceso.pid  # Asigna memoria al proceso
                    proceso.start_index = start_index
                    self.tamano_disponible -= proceso.memoria_requerida
                    return True
            else:
                start_index = -1
                free_space = 0  # Reinicia los contadores si se encuentra un bloque ocupado
        return False
    
    def asignar_memoria_best_fit(self, proceso):
        mejor_bloque = None
        mejor_tamano = float('inf')
        start_index = -1
        free_space = 0

        for i in range(self.tamano_total):
            if self.memoria[i] == 0:  # Espacio libre
                if start_index == -1:
                    start_index = i
                free_space += 1
            else:
                if free_space >= proceso.memoria_requerida and free_space < mejor_tamano:
                    mejor_bloque = start_index
                    mejor_tamano = free_space
                start_index = -1
                free_space = 0

        # Considerar el último bloque si estaba libre al final de la memoria
        if free_space >= proceso.memoria_requerida and free_space < mejor_tamano:
            mejor_bloque = start_index

        if mejor_bloque is not None:
            for j in range(mejor_bloque, mejor_bloque + proceso.memoria_requerida):
                self.memoria[j] = proceso.pid  # Asigna memoria al proceso
            proceso.start_index = mejor_bloque
            self.tamano_disponible -= proceso.memoria_requerida
            return True

        return False

    def asignar_memoria_worst_fit(self, proceso):
        peor_bloque = None
        peor_tamano = 0
        start_index = -1
        free_space = 0

        for i in range(self.tamano_total):
            if self.memoria[i] == 0:  # Espacio libre
                if start_index == -1:
                    start_index = i
                free_space += 1
            else:
                if free_space >= proceso.memoria_requerida and free_space > peor_tamano:
                    peor_bloque = start_index
                    peor_tamano = free_space
                start_index = -1
                free_space = 0

        # Considerar el último bloque si estaba libre al final de la memoria
        if free_space >= proceso.memoria_requerida and free_space > peor_tamano:
            peor_bloque = start_index

        if peor_bloque is not None:
            for j in range(peor_bloque, peor_bloque + proceso.memoria_requerida):
                self.memoria[j] = proceso.pid  # Asigna memoria al proceso
            proceso.start_index = peor_bloque
            self.tamano_disponible -= proceso.memoria_requerida
            return True

        return False

    def liberar_memoria(self, proceso):
        if proceso.start_index is not None:
            for i in range(proceso.start_index, proceso.start_index + proceso.memoria_requerida):
                self.memoria[i] = 0  # Libera la memoria ocupada por el proceso
            proceso.start_index = None
            self.tamano_disponible += proceso.memoria_requerida

class Simulador:
    def __init__(self, root):
        self.root = root
        self.root.title("Simulación de Gestión de Procesos y Memoria")

        self.memoria = Memoria(MEMORY_SIZE)
        self.memoria_secundaria = Memoria(SECONDARY_MEMORY_SIZE)
        self.procesos = []
        self.id_proceso = 0
        self.proceso_actual_index = 0
        self.algoritmo_seleccionado = tk.StringVar(value="First Fit")
        self.metodo_seleccionado = tk.StringVar(value="Paginación Dinamica")  # Nueva variable para el método
        self.proceso_ejecutando = False  # Bandera para saber si hay un proceso en ejecución

        # Interfaz gráfica
        self.canvas = tk.Canvas(root, width=1500, height=600, bg="white")
        self.canvas.pack()

        self.memory_label = tk.Label(root, text="Memoria libre: 150/150")
        self.memory_label.pack()

        # Frame para los menús
        self.menu_frame = tk.Frame(root)
        self.menu_frame.pack()

        # Menú de selección de algoritmo
        self.menu_algoritmo = tk.OptionMenu(self.menu_frame, self.algoritmo_seleccionado, "First Fit", "Best Fit", "Worst Fit")
        self.menu_algoritmo.pack(side=tk.LEFT)

        # Menú de selección de método (Paginación/Segmentación)
        self.menu_metodo = tk.OptionMenu(self.menu_frame, self.metodo_seleccionado, "Paginación Dinamica", "Compactación")
        self.menu_metodo.pack(side=tk.LEFT)

        # Botón para crear proceso
        self.create_button = tk.Button(root, text="Crear Proceso", command=self.crear_proceso)
        self.create_button.pack(pady=10)

        self.STATES = {
            "Nuevo": (50, 80, "lightgray"),
            "Listo": (90, 120, "lightgreen"),
            "Ejecutando": (130, 160, "lightblue"),
            "Bloqueado": (170, 200, "lightcoral"),
            "Terminado": (210, 240, "lightyellow"),
            "SWAP": (370, 400, "lightcyan"),
        }

        # Recursos simulados (por ejemplo, CPU, E/S)
        self.total_recursos = 3
        self.recursos_disponibles = self.total_recursos

        self.recursos_label = tk.Label(root, text=f"Recursos disponibles: {self.recursos_disponibles}/{self.total_recursos}")
        self.recursos_label.pack()

        # Iniciar simulación
        self.root.after(1000, self.simular_ejecucion)

    def crear_proceso(self):
        memoria_requerida = random.randint(5, 20)
        recursos_requeridos = random.randint(1, 3)

        if memoria_requerida > self.memoria.tamano_disponible and memoria_requerida > self.memoria_secundaria.tamano_disponible:
            print("No hay suficiente memoria disponible para el nuevo proceso.")
            return

        self.id_proceso += 1
        nuevo_proceso = Proceso(self.id_proceso, memoria_requerida, recursos_requeridos)
        self.procesos.append(nuevo_proceso)

        # Intentar asignar memoria con el algoritmo seleccionado
        algoritmo = self.algoritmo_seleccionado.get()

        # Chequear si se seleccionó el método "Compactación"
        metodo = self.metodo_seleccionado.get()
        if metodo == "Compactación":
            self.compactar_memoria()

        self.root.after(1000, self.intentar_asignar_memoria, nuevo_proceso)
        self.actualizar_display()     
            

    def intentar_asignar_memoria(self, nuevo_proceso):
        algoritmo = self.algoritmo_seleccionado.get()
        if self.memoria.asignar_memoria(nuevo_proceso, algoritmo):
            nuevo_proceso.estado = "Listo"  # Cambiar a 'Listo' si la asignación es exitosa
        elif self.memoria_secundaria.asignar_memoria(nuevo_proceso, algoritmo):
            nuevo_proceso.estado = "SWAP"
            nuevo_proceso.esta_en_memoria_secundaria = True
        else:
            print(f"No hay suficiente memoria para el proceso {nuevo_proceso.pid}, permanece en 'Nuevo'.")

        self.actualizar_display()      

    def compactar_memoria(self):
        print("Se está ejecutando la compactación de la memoria...")
        # Aquí puedes agregar la lógica para la compactación de la memoria
        # Ejemplo básico: mover todos los procesos al inicio de la memoria y dejar el espacio libre al final.
        nueva_memoria = [0] * self.memoria.tamano_total
        indice_actual = 0

        for i in range(self.memoria.tamano_total):
            if self.memoria.memoria[i] != 0:
                nueva_memoria[indice_actual] = self.memoria.memoria[i]
                indice_actual += 1

        self.memoria.memoria = nueva_memoria
        self.memoria.tamano_disponible = self.memoria.tamano_total - indice_actual
        print("Compactación completada.")

        self.actualizar_display()


    def simular_ejecucion(self):
        if not self.procesos:
            self.root.after(1000, self.simular_ejecucion)
            return

        proceso_actual = self.procesos[self.proceso_actual_index]

        algoritmo = self.algoritmo_seleccionado.get()
        if proceso_actual.estado == "SWAP" and proceso_actual.esta_en_memoria_secundaria:
            if self.memoria.asignar_memoria(proceso_actual, algoritmo):
                self.memoria_secundaria.liberar_memoria(proceso_actual)
                proceso_actual.esta_en_memoria_secundaria = False
                proceso_actual.estado = "Listo"
                print(f"Proceso {proceso_actual.pid} transferido de memoria secundaria a memoria principal.")

        # Si ya hay un proceso en "Ejecutando", esperar al siguiente ciclo
        if proceso_actual.estado == "Listo" and not self.proceso_ejecutando:
            proceso_actual.estado = "Ejecutando"
            self.proceso_ejecutando = True  # Marca que hay un proceso en ejecución
            print(f"Proceso {proceso_actual.pid} está en 'Ejecutando'")
            self.actualizar_display()
            # Después de un tiempo, finalizar la ejecución
            self.root.after(2000, self.finalizar_ejecucion, proceso_actual)

        # Avanzar al siguiente proceso en la lista
        self.proceso_actual_index = (self.proceso_actual_index + 1) % len(self.procesos)
        self.root.after(1000, self.simular_ejecucion)

    def finalizar_ejecucion(self, proceso):
            # Cambiar el estado del proceso de manera aleatoria después de ejecutar
            rand = random.random()
            if rand < 0.33:
                proceso.estado = "Bloqueado"
                # Volver a "Listo" después de un tiempo
                self.root.after(2000, self.volver_a_listo, proceso)
            elif rand < 0.66:
                proceso.estado = "Listo"
            else:
                proceso.estado = "Terminado"
                self.memoria.liberar_memoria(proceso)
                self.procesos.remove(proceso)
                # Ajustar el índice del proceso actual si la lista cambia de tamaño
                self.proceso_actual_index = min(self.proceso_actual_index, len(self.procesos) - 1)

            self.proceso_ejecutando = False  # Libera la bandera para permitir otro proceso en ejecución
            self.actualizar_display()

    def volver_a_listo(self, proceso):
        proceso.estado = "Listo"
        print(f"Proceso {proceso.pid} ha vuelto a 'Listo'.")
        self.actualizar_display()

    def actualizar_display(self):
        self.canvas.delete("all")

        # Mostrar memoria libre
        free_memory = MEMORY_SIZE - sum(1 for x in self.memoria.memoria if x > 0)
        free_secondary_memory = SECONDARY_MEMORY_SIZE - sum(1 for x in self.memoria_secundaria.memoria if x > 0)
        self.memory_label.config(text=f"Memoria libre: {free_memory}/{MEMORY_SIZE} | Memoria secundaria libre: {free_secondary_memory}/{SECONDARY_MEMORY_SIZE}")

        # Dibujar la memoria principal con bloques segmentados
        x_pos = 10
        block_height = 50
        i = 0
        while i < MEMORY_SIZE:
            # Detectar un segmento de memoria continua
            pid = self.memoria.memoria[i]
            start = i
            while i < MEMORY_SIZE and self.memoria.memoria[i] == pid:
                i += 1
            end = i

            # Calcular el ancho del segmento en función de su tamaño
            segment_size = end - start
            segment_width = segment_size * 10
            color = "blue" if pid == 0 else "lightblue"

            # Dibujar el segmento y mostrar el tamaño de memoria en el centro del bloque
            self.canvas.create_rectangle(x_pos, 10, x_pos + segment_width, 10 + block_height, fill=color, outline="black")
            self.canvas.create_text(x_pos + segment_width / 2, 10 + block_height / 2, text=f"{segment_size} KB", fill="white")
            
            # Avanzar la posición en el eje x
            x_pos += segment_width

        # Dibujar la memoria secundaria con bloques segmentados
        x_pos = 10
        i = 0
        while i < SECONDARY_MEMORY_SIZE:
            # Detectar un segmento de memoria continua
            pid = self.memoria_secundaria.memoria[i]
            start = i
            while i < SECONDARY_MEMORY_SIZE and self.memoria_secundaria.memoria[i] == pid:
                i += 1
            end = i

            # Calcular el ancho del segmento en función de su tamaño
            segment_size = end - start
            segment_width = segment_size * 10
            color = "green" if pid == 0 else "lightblue"

            # Dibujar el segmento y mostrar el tamaño de memoria en el centro del bloque
            self.canvas.create_rectangle(x_pos, 70, x_pos + segment_width, 70 + block_height, fill=color, outline="black")
            self.canvas.create_text(x_pos + segment_width / 2, 70 + block_height / 2, text=f"{segment_size} KB", fill="white")
            
            # Avanzar la posición en el eje x
            x_pos += segment_width

        # Dibujar bloques de estado y procesos
        state_width = 1500
        state_height = 30
        y_offset = 150
        for state, (y1, y2, color) in self.STATES.items():
            y1 += y_offset
            y2 += y_offset
            self.canvas.create_rectangle(20, y1, 20 + state_width, y1 + state_height, fill=color, outline="black")
            self.canvas.create_text(20 + state_width / 2, y1 + state_height / 2, text=state, fill="black")

        process_x_offset = 30
        process_width = 70
        process_height = 30
        state_process_positions = {state: 0 for state in self.STATES}

        for proceso in self.procesos:
            state_pos = self.STATES[proceso.estado]
            x_pos = process_x_offset + state_process_positions[proceso.estado] * (process_width + 10)
            block_y1 = state_pos[0] + y_offset + 5
            block_y2 = state_pos[1] + y_offset - 5

            # Dibujar el bloque azul del proceso
            self.canvas.create_rectangle(x_pos, block_y1, x_pos + process_width, block_y2, fill="blue", outline="black")

            # Centrar el texto PID dentro del bloque azul
            text_y = (block_y1 + block_y2) / 2
            self.canvas.create_text(x_pos + process_width / 2, text_y, text=f"PID:{proceso.pid}", fill="white")

            # Incrementar el contador de posiciones para ese estado
            state_process_positions[proceso.estado] += 1




if __name__ == "__main__":
    root = tk.Tk()
    simulador = Simulador(root)
    root.mainloop()
