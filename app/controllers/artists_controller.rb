class ArtistsController < ApplicationController
  before_action :enforce_artist_setup

  def dashfolio
    @artist = current_user
  end

  def fetch_content
    render status: 200,
           partial: 'filter_content_form',
           locals: { content_type: params[:content_type], content: get_content, container: params[:container] } and return
  end

  def filter_content
    update_content
  end

  private
  def get_content
    case params[:content_type]
    when 'instagram_images'
      current_user.instagram_network.all_images
    when 'soundcloud_tracks'
      current_user.soundcloud_network.all_tracks
    when 'soundcloud_albums'
      current_user.soundcloud_network.all_albums
    when 'youtube_videos'
      current_user.youtube_network.all_videos
    else
      []
    end
  end

  def update_content
    items = params.require(:selected_items)
    case params[:content_type]
    when 'instagram_images'
      current_user.instagram_network.update_attributes(selected_images: items)
    when 'soundcloud_tracks'
      current_user.soundcloud_network.update_attributes(selected_tracks: items)
    when 'soundcloud_albums'
      current_user.soundcloud_network.update_attributes(selected_albums: items)
    when 'youtube_videos'
      current_user.youtube_network.update_attributes(selected_videos: items)
    when 'facebook_videos'
      current_user.facebook_network.update_attributes(selected_videos: items)
    else
      true
    end
  end
end