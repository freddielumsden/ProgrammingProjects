extends Area2D

var screen_size
var character_direction = "Right"
func _ready():
	screen_size = get_viewport_rect().size

func player_input():
	var input_vector = Vector2.ZERO
	if Input.is_action_pressed("player_right"):
		 input_vector.x += 1
	if Input.is_action_pressed("player_left"):
		input_vector.x -= 1
	if Input.is_action_pressed("player_down"):
		input_vector.y += 1
	if Input.is_action_pressed("player_up"):
		input_vector.y -= 1
	return input_vector

func animate_player(vector):
	if vector[0] > 0:
		character_direction = "Right"
	elif vector[0] < 0:
		character_direction = "Left"
	if vector.length() > 0:
		$AnimatedSprite.play("Run_" + character_direction)
	elif not $AnimatedSprite.animation in ["Right_Idle", "Left_IDLE"]: # If no player movement and current animation isn't Idle, make it idle
		$AnimatedSprite.play("Idle_" + character_direction)

func _process(delta):
	var input_vector = player_input()
	animate_player(input_vector)
