PGDMP                       |           ootm-dex    16.3    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16399    ootm-dex    DATABASE     �   CREATE DATABASE "ootm-dex" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE "ootm-dex";
                postgres    false            �            1259    16407    drops    TABLE     r   CREATE TABLE public.drops (
    id integer NOT NULL,
    item text,
    amount text,
    rate double precision
);
    DROP TABLE public.drops;
       public         heap    postgres    false            �            1259    16414    groups    TABLE     {   CREATE TABLE public.groups (
    id integer NOT NULL,
    group_id integer,
    drop_id integer,
    monster_id integer
);
    DROP TABLE public.groups;
       public         heap    postgres    false            �            1259    16400    monsters    TABLE       CREATE TABLE public.monsters (
    id integer NOT NULL,
    name character varying(255),
    description text,
    navi_text text,
    hp integer,
    damage integer,
    dot integer,
    location text,
    weakness text,
    strength text,
    image_url text
);
    DROP TABLE public.monsters;
       public         heap    postgres    false            �          0    16407    drops 
   TABLE DATA                 public          postgres    false    216          �          0    16414    groups 
   TABLE DATA                 public          postgres    false    217   8       �          0    16400    monsters 
   TABLE DATA                 public          postgres    false    215   R       $           2606    16413    drops drops_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.drops
    ADD CONSTRAINT drops_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.drops DROP CONSTRAINT drops_pkey;
       public            postgres    false    216            &           2606    16418    groups groups_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.groups DROP CONSTRAINT groups_pkey;
       public            postgres    false    217            "           2606    16406    monsters monsters_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.monsters
    ADD CONSTRAINT monsters_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.monsters DROP CONSTRAINT monsters_pkey;
       public            postgres    false    215            '           2606    16419    groups groups_drop_id_fkey    FK CONSTRAINT     y   ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_drop_id_fkey FOREIGN KEY (drop_id) REFERENCES public.drops(id);
 D   ALTER TABLE ONLY public.groups DROP CONSTRAINT groups_drop_id_fkey;
       public          postgres    false    216    217    4644            (           2606    16424    groups groups_monster_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_monster_id_fkey FOREIGN KEY (monster_id) REFERENCES public.monsters(id);
 G   ALTER TABLE ONLY public.groups DROP CONSTRAINT groups_monster_id_fkey;
       public          postgres    false    4642    215    217            �   
   x���          �   
   x���          �   
   x���         