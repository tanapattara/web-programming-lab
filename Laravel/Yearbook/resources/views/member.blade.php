@extends('layouts.app')

@section('content')
<div class="container">
    <div class="text-right">
        <form method="POST" action="{{ route('member.delete') }}">
            @csrf
            <div class="form-group">
                <input type="hidden" name="id" value="{{ $member->id }}">
                <input type="submit" class="btn btn-danger delete-user" value="{{ __('ลบสมาชิก')}}">
            </div>
        </form>
    </div>
    <div class="justify-content-center">
	<form method="POST" action="{{ route('member.edit') }}">
        @csrf
        <input type="hidden" name="id" value="{{ $member->id }}">
        <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('ชื่อ') }}</label>
            <div class="col-md-6">
                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{$member->first_name}}" required autocomplete="name" autofocus>
            </div>
        </div>
        <div class="form-group row">
            <label for="lastname" class="col-md-4 col-form-label text-md-right">{{ __('นามสกุล') }}</label>
            <div class="col-md-6">
                <input id="lastname" type="text" class="form-control @error('lastname') is-invalid @enderror" name="lastname" value="{{$member->last_name}}" required autocomplete="lastname" autofocus>
            </div>
        </div>
        <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('อีเมล') }}</label>
            <div class="col-md-6">
                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{$member->email}}" required autocomplete="email" autofocus>
            </div>
        </div>
        <div class="form-group row">
            <label for="eduyear" class="col-md-4 col-form-label text-md-right">{{ __('ปีการศึกษา') }}</label>
            <div class="col-md-6">
                <input id="eduyear" type="number" class="form-control @error('eduyear') is-invalid @enderror" name="eduyear" value="{{$member->edu_year}}" required autocomplete="eduyear" autofocus>
            </div>
        </div>
        <div class="form-group row">
            <label for="stuid" class="col-md-4 col-form-label text-md-right">{{ __('รหัสนักศึกษา') }}</label>
            <div class="col-md-6">
                <input id="stuid" type="text" class="form-control @error('stuid') is-invalid @enderror" name="stuid" value="{{$member->student_id}}" required autocomplete="stuid" autofocus>
            </div>
        </div>
        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    {{ __('บันทึกการเปลี่ยนแปลง') }}
                </button>
            </div>
        </div>
    </form> 
    </div>
</div>
@endsection