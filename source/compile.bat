g++ -o ObjRender -static -O2 -std=c++0x -DGLEW_STATIC  main.cpp tiny_obj_loader.cc -I. -lglew32 -lglfw3 -lopengl32 -lgdi32 -D__NO_INLINE__ 
